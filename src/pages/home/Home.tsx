import ImageLinkCard from "../../components/ImageLinkCard";

export default function Home() {
  return (
    <section className="mx-auto my-16 grid w-full grid-cols-1 justify-items-stretch gap-x-8 gap-y-16 p-4 md:max-w-7xl md:grid-cols-2 md:p-8 lg:p-16">
      <div className="flex w-full flex-col items-center justify-center gap-y-6">
        <h1 className="font-georgia text-5xl font-bold">Jack Teske</h1>
        <h3 className="font-helvetica text-center text-gray-400">
          Illustration, comics & hand-painted production design
        </h3>
        <p className="font-helvetica text-sm text-gray-600 uppercase">
          atlanta georgia
        </p>
      </div>
      <img
        src="/img/comics/templar/chapter-1/page-01.jpg"
        alt="Templar Cover Art"
      />
      <ImageLinkCard
        description="Set design, illustration & commercial pieces"
        title="Professional Work"
        to="work"
        src="/img/work/wizard-of-oz/photo-6.jpg"
        alt="Wizard of oz"
      />
      <ImageLinkCard
        alt="Templar Comic"
        description="A personal comic — read Chapter 1"
        title="Templar"
        to="comic"
        src="/img/comics/templar/chapter-1/page-18.jpg"
      />
      <hr className="col-span-full h-px border-none bg-gray-600" />
      <div className="col-span-full">
        <h1 className="font-georgia mb-4 text-3xl font-bold">About</h1>
        <p className="font-helvetica text-gray-500">
          Jack Teske is an illustrator based in Atlanta, Georgia, and a graduate
          of the Ringling College of Art and Design. His work spans professional
          illustration for play productions and medical publications,
          hand-painted production and set design, and his ongoing personal
          comic, Templar.
        </p>
      </div>
    </section>
  );
}
