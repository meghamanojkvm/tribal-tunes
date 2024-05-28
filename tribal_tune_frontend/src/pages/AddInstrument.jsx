import React, { useState, useEffect } from "react";

export const AddInstrument = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [audioPreview, setAudioPreview] = useState(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  useEffect(() => {
    if (!selectedAudio) {
      setAudioPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedAudio);
    setAudioPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedAudio]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleAudioChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedAudio(e.target.files[0]);
    }
  };

  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: 'url("")' }}
    >
      {" "}
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <form action="#" method="POST" className="mt-8">
            <div>
              <h2 className="text-center text-2xl font-bold leading-tight text-black mb-4">
                ADD INSTRUMENTS
              </h2>
              <div className="mb-">
                <label
                  htmlFor="image"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Instrument Image{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                {preview && (
                  <div className="mt-4">
                    <img
                      src={preview}
                      alt="Selected file"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                )}
              </div>
              <div className="my-4">
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Instrument Name{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Instrument Name"
                    id="name"
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="description"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Instrument Description{" "}
                </label>
                <div className="mt-2">
                  <textarea
                    className="flex w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Write a description of the instrument"
                    id="description"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="audio"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Instrument Audio{" "}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="file"
                    id="audio"
                    accept="audio/*"
                    onChange={handleAudioChange}
                  />
                </div>
                {audioPreview && (
                  <div className="mt-4">
                    <audio controls className="w-full">
                      <source src={audioPreview} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>

              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Add Instrument{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
