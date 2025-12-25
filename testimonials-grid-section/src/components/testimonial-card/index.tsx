import Image from "next/image";

export function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 lg:flex gap-8 my-[73px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div
          className={`md:col-span-2 lg:col-span-2 max-w-[305px] md:max-w-[647px] lg:max-w-[540px] bg-purple-500 p-8 rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.24)]`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`border-2 border-purple-300 w-fit rounded-full overflow-hidden h-fit`}
            >
              <Image
                alt="Daniel Clifford"
                src="/images/image-daniel.jpg"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h3 className={`text-preset-2 text-white tracking-wide`}>
                Daniel Clifford
              </h3>
              <p className={`text-preset-4 text-purple-50 tracking-wide`}>
                Verified Graduate
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-preset-1 text-white my-4">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h2>
            <p className="text-preset-3 text-purple-50">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
        </div>

        <div
          className={`max-w-[305px] md:max-w-[307.5px] lg:max-w-[255px] bg-gray-500 p-8 rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.24)]`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`border-2 border-gray-500 w-fit rounded-full overflow-hidden h-fit`}
            >
              <Image
                alt="Jonathan Walters"
                src="/images/image-jonathan.jpg"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h3 className={`text-preset-2 text-white tracking-wide`}>
                Jonathan Walters
              </h3>
              <p className={`text-preset-4 text-gray-300 tracking-wide`}>
                Verified Graduate
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-preset-1 text-white my-4">
              The team was very supportive and kept me motivated
            </h2>
            <p className="text-preset-3 text-purple-50">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. “
            </p>
          </div>
        </div>
        <div
          className={`max-w-[305px] md:max-w-[307.5px] lg:max-w-[255px] bg-white p-8 rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.24)]`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`border-2 border-gray-500 w-fit rounded-full overflow-hidden h-fit`}
            >
              <Image
                alt="Jeanette Harmon"
                src="/images/image-jeanette.jpg"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h3 className={`text-preset-2 text-gray-500 tracking-wide`}>
                Jeanette Harmon
              </h3>
              <p className={`text-preset-4 text-gray-400 tracking-wide`}>
                Verified Graduate
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-preset-1 text-gray-500 my-4">
              An overall wonderful and rewarding experience
            </h2>
            <p className="text-preset-3 text-gray-400">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
        </div>

        <div
          className={`md:col-span-2 lg:col-span-2 max-w-[305px] md:max-w-[647px] lg:max-w-[540px] bg-[#19202D] p-8 rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.24)]`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`border-2 border-purple-500 w-fit rounded-full overflow-hidden h-fit`}
            >
              <Image
                alt="Patrick Abrams"
                src="/images/image-patrick.jpg"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h3 className={`text-preset-2 text-white tracking-wide`}>
                Patrick Abrams
              </h3>
              <p className={`text-preset-4 text-white tracking-wide`}>
                Verified Graduate
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-preset-1 text-gray-200 my-4">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h2>
            <p className="text-preset-3 text-gray-100">
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
        </div>
      </div>

      <div
        className={`max-w-[305px] md:max-w-[647px] lg:max-w-[255px] bg-white p-8 rounded-lg shadow-[40px_60px_50px_-47px_rgba(72,85,106,0.24)]`}
      >
        <div className="flex items-center gap-4">
          <div className={`border-2 w-fit rounded-full overflow-hidden h-fit`}>
            <Image
              alt="Kira Whittle"
              src="/images/image-kira.jpg"
              width={28}
              height={28}
            />
          </div>
          <div>
            <h3 className={`text-preset-2 text-gray-500 tracking-wide`}>
              Kira Whittle
            </h3>
            <p className={`text-preset-4 text-gray-400 tracking-wide`}>
              Verified Graduate
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-preset-1 text-gray-500 my-4">
            Such a life-changing experience. Highly recommended!
          </h2>
          <p className="text-preset-3 text-gray-400">
            “ Before joining the bootcamp, I’ve never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I’ve often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend! ”
          </p>
        </div>
      </div>
    </div>
  );
}
