import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import service from "../appwrite/service";
import QrComp from "../components/QrComp";
import Header from "../components/Header";
import ImageSection from "../components/ImageSection";
import Description from "../components/Description";
import Audio from "../components/Audio";

export const ShowInstrument = () => {
  const { id } = useParams();
  const [instrument, setInstrument] = useState(null);
  const [qrcode, setQrcode] = useState(false);
  useEffect(() => {
    const fetchInstrument = async () => {
      try {
        const response = await service.getPost(id.substring(1));

        if (response) {
          setInstrument(response);
        } else {
          console.error(`Instrument with ID ${id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching instrument:", error);
      }
    };

    fetchInstrument();
  }, [id]);

  if (!instrument) {
    return <div>Loading...</div>;
  }

  const qrclick = () => {
    setQrcode((prev) => !prev);
  };

  const descriptionSections = [
    {
      heading: "Types",
      items: [
        "Gayaki Sarod: Emulates the human voice, favored for its lyrical expression, ideal for solo performances.",
        "Chikari Sarod: Known for its rhythmic accompaniment, featuring thinner chikari strings.",
      ],
    },
  ];

  return (
    <div className="w-full bg-zinc-50">
      <div className="flex justify-end mr-4" onClick={qrclick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
          />
        </svg>
      </div>

      <section className="relative overflow-hidden py-4">
        {qrcode ? (
          <div className="flex items-center justify-center m-4">
            <QrComp url={window.location.href} />
          </div>
        ) : null}
        <Header
          title={instrument.title}
          className="text-4xl font-bold text-amber-950 text-center shadow-lg pb-6"
        />
        <div className="ml-4 mr-4 p-10 flex flex-col md:flex-row h-auto items-center justify-center text-justify space-y-8 md:space-y-0 md:space-x-10">
          <ImageSection
            src={instrument.image}
            alt={instrument.title}
            width="100%"
            height="auto"
            border="border-2 border-gray-600"
            rounded="rounded-lg"
          />
          <Description
            title="Description"
            content={instrument.description}
            sections={descriptionSections}
            titleClassName="text-2xl font-bold text-amber-950 mb-4"
            contentClassName="text-lg text-gray-700 leading-relaxed"
            sectionTitleClassName="text-2xl font-semibold text-amber-950 mt-4 mb-4"
            itemClassName="text-lg text-gray-700 ml-4 list-disc list-inside "
          />
        </div>
        <div className="mt-10 ml-24 flex items-center justify-left space-x-12">
          <Header title="Audio" className="text-3xl font-bold text-amber-950" />
          <Audio
            src={instrument.audio}
            className="w-full max-w-5xl"
          />
        </div>
      </section>
    </div>
  );
};
