import b2 from "../assets/b2.png";
import spirit from "../assets/spirit.jpeg";
import vision from "../assets/vision.jpeg";
import qr from "../assets/qr.jpeg";

export const AboutUs = () => {
  return (
    <div>
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url(${b2})",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <h1 className="absolute bottom-12 left-12 text-3xl font-bold text-gray-200 md:text-5xl">
            ABOUT US
          </h1>
        </div>
      </div>
      <div class="mx-auto max-w-6xl px-4">
        <p className="mt-16 text-lg text-gray-600 md:text-xl leading-relaxed font-serif text-justify">
          Our project is inspired by the rich musical heritage of India's tribal
          communities, showcased at the Indira Gandhi Rashtriya Manav
          Sangrahalaya in Bhopal, Madhya Pradesh. This museum, a testament to
          India's cultural heritage, has a dedicated section for various tribal
          musical instruments. However, the current exhibit primarily offers a
          visual experience, leaving a gap in auditory representation.This gap
          limits visitors from fully immersing in the rich sounds and rhythms
          integral to the tribal musical experience.
        </p>

        <hr class="mt-20" />

        <div class="flex flex-col items-center gap-x-4 gap-y-4 py-12 md:flex-row">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <p class="text-3xl font-bold md:text-4xl text-gray-700 mt-8 mb-8 mr-12">
                Our Spirit
              </p>
              <p class="text-base text-gray-600 md:text-xl text-justify mr-12">
                Enhancing the museum experience by integrating the rich sounds
                of traditional musical instruments to create a more immersive
                and inclusive environment. We believe that by adding an auditory
                dimension to the exhibit, we can provide visitors with a deeper
                appreciation of the cultural significance of these instruments.
              </p>
            </div>
            <div class="md:w-1/2">
              <img
                src={spirit}
                alt="Getting Started"
                class="rounded-lg h-96 md:h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <hr class="mt-20" />

        <div class="flex flex-col md:flex-row mt-8 py-16">
          <div class="md:w-1/2 order-2 md:order-1">
            <img
              src={vision}
              alt="Getting Started"
              class="rounded-lg h-96 md:h-full w-full object-cover"
            />
          </div>
          <div class="md:w-1/2 order-1 md:order-2">
            <p class="text-3xl font-bold md:text-4xl text-gray-700 mt-8 mb-8 ml-12">
              Vision
            </p>
            <p class="text-base text-gray-600 md:text-xl text-justify ml-12">
              To bridge the sensory gap in museum exhibits by incorporating
              auditory elements, increasing accessibility for visually
              challenged individuals, and deepening visitor engagement. We
              envision a future where museum exhibits are more immersive and
              inclusive, offering a multi-sensory experience that caters to
              diverse audiences.
            </p>
          </div>
        </div>
        <hr class="mt-20" />

        <div class="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <p class="text-3xl font-bold md:text-4xl text-gray-700 mt-8 mb-8 mr-12">
                Mission
              </p>
              <p class="text-base text-gray-600 md:text-xl text-justify mr-12">
                We aim to bring the unique sounds of India's tribal musical
                instruments to life in innovative and inclusive ways. By
                providing audio recordings and information via QR codes, we will
                create an immersive experience for all visitors. We will support
                and promote cultural preservation, enhance accessibility, and
                improve the museum's inclusivity and sustainability, ensuring
                our project's lasting impact.
              </p>
            </div>
            <div class="md:w-1/2">
              <img
                src={qr}
                alt="Getting Started"
                class="rounded-lg h-96 md:h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <hr class="mt-20" />
      </div>
    </div>
  );
};
