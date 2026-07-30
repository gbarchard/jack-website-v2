import { Modal } from "flowbite-react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Link, Route, Routes, useParams } from "react-router-dom"
import { workData } from "./workData"

export default function Work() {
  return (
    <Routes>
      <Route index element={<WorkPage />} />
      <Route path=":workItem" element={<WorkDetailedPage />} />
    </Routes>
  )
}

function WorkPage() {
  return (
    <section className="mx-auto w-full max-w-7xl p-4 sm:p-16">
      <h1 className="font-georgia mb-6 text-4xl font-bold">
        Professional Work
      </h1>
      <p className="font-helvetica text-gray-500">
        A selection of illustration, production design, and commercial work.
      </p>
      {workData.map((d) => (
        <WorkSectionPreview
          title={d.title}
          description={d.description}
          path={d.key}
          fileType={d.fileType}
          fileCount={d.imageCount}
        />
      ))}
    </section>
  )
}

function WorkSectionPreview(props: {
  title: string
  description: string
  path: string
  fileType: string
  fileCount: number
}) {
  const { fileCount, fileType, title, description, path } = props

  const [image, setImage] = useState<string | null>(null)

  const images = Array.from(
    { length: fileCount < 4 ? fileCount : 4 },
    (_, idx) => `/img/work/${path}/photo-${idx + 1}.${fileType}`,
  )

  const { handleLeft, handleRight } = useHandleArrowKeys(
    images,
    image,
    setImage,
  )

  return (
    <>
      <hr className="my-8 h-px w-full border-none bg-gray-600" />
      <div className="mb-4 w-full lg:inline-flex lg:items-center lg:justify-between lg:gap-x-4">
        <h2 className="font-georgia mb-4 text-2xl font-bold lg:mb-0">
          {title}
        </h2>
        <p className="font-helvetica text-sm text-gray-500">{description}</p>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {images.map((i) => (
          <PhotoCard src={i} onClick={() => setImage(i)} />
        ))}
      </div>
      {fileCount > 4 && (
        <Link
          className="font-helvetica w-full text-right text-red-500 hover:underline"
          to={path}
        >
          See More ➔
        </Link>
      )}
      <ImageViewModal
        image={image}
        onClose={() => setImage(null)}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </>
  )
}

function PhotoCard(props: { src: string; onClick: () => void }) {
  const { onClick, src } = props

  return (
    <>
      <img src={src} className="rounded md:hidden" />
      <button
        className="group hidden overflow-hidden rounded md:block"
        onClick={onClick}
      >
        <img
          src={src}
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </button>
    </>
  )
}

function WorkDetailedPage() {
  const { workItem } = useParams()
  const [image, setImage] = useState<string | null>(null)
  const images = useMemo(() => {
    const data = workData.find((d) => d.key === workItem)
    if (!data) return []
    return Array.from(
      { length: data.imageCount },
      (_, idx) => `/img/work/${workItem}/photo-${idx + 1}.${data.fileType}`,
    )
  }, [workItem])

  const { handleLeft, handleRight } = useHandleArrowKeys(
    images,
    image,
    setImage,
  )

  return (
    <section className="mx-auto w-full max-w-7xl p-4 sm:p-16">
      <h1 className="font-georgia mb-6 text-4xl font-bold">
        The Wizard of Oz — Set & Production Design
      </h1>
      <p className="font-helvetica text-gray-500">
        Hand-painted backdrop panels created for a stage production of The
        Wizard of Oz.
      </p>
      <hr className="my-8 h-px w-full border-none bg-gray-600" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {images.map((i) => (
          <PhotoCard src={i} onClick={() => setImage(i)} />
        ))}

        <ImageViewModal
          image={image}
          onClose={() => setImage(null)}
          handleLeft={handleLeft}
          handleRight={handleRight}
        />
      </div>
    </section>
  )
}

function ImageViewModal(props: {
  image: string | null
  onClose: () => void
  handleLeft: () => void
  handleRight: () => void
}) {
  const { handleLeft, handleRight, image, onClose } = props

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleRight()
      }

      if (e.key === "ArrowLeft") {
        handleLeft()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [handleLeft, handleRight])

  return (
    <Modal
      className="bg-inherit"
      theme={{
        content: {
          base: "focus:ring-0 focus:outline-none",
          inner: "bg-inherit!",
        },
      }}
      show={!!image}
      dismissible
      onClose={onClose}
    >
      <div className="flex w-full items-center justify-between">
        <button
          tabIndex={-1}
          onClick={() => handleLeft()}
          className="mr-10 rotate-180 text-3xl hover:text-gray-300"
        >
          ➔
        </button>
        {image && <img src={image} />}
        <button
          tabIndex={-1}
          onClick={() => handleRight()}
          className="ml-10 text-3xl hover:text-gray-300"
        >
          ➔
        </button>
      </div>
    </Modal>
  )
}

function useHandleArrowKeys(
  images: string[],
  image: string | null,
  setImage: (image: string) => void,
) {
  const handleLeft = useCallback(() => {
    if (!image) return
    const idx = images.indexOf(image)
    if (idx > 0) {
      setImage(images[idx - 1])
    } else {
      setImage(images[images.length - 1])
    }
  }, [image, images, setImage])

  const handleRight = useCallback(() => {
    if (!image) return
    const idx = images.indexOf(image)
    if (idx < images.length - 1) {
      setImage(images[idx + 1])
    } else {
      setImage(images[0])
    }
  }, [image, images, setImage])

  return { handleLeft, handleRight }
}
