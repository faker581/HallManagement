

  

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to Our Hall of Residence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover a vibrant community where students thrive. Our hall of residence offers a supportive
                    environment, exceptional amenities, and opportunities to engage in campus life.
                  </p>
                </div>
              </div>
              <img
                src="Hero Page.jpg"
                alt="Hall of Residence"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Exceptional Amenities</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our hall of residence is designed to provide you with everything you need to thrive. From modern
                  facilities to recreational spaces, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="Hero Page.jpg"
                alt="Amenities"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Modern Facilities</h3>
                      <p className="text-muted-foreground">
                        Enjoy state-of-the-art study spaces, recreational areas, and communal lounges.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Dining Options</h3>
                      <p className="text-muted-foreground">
                        Indulge in a variety of dining options, including a cafeteria and a coffee shop.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Fitness Center</h3>
                      <p className="text-muted-foreground">
                        Stay active with our on-site fitness center, equipped with the latest exercise equipment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vibrant Community</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At our hall of residence, we believe in fostering a supportive and inclusive community. Engage in a
                  variety of social, cultural, and educational activities to enrich your student experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="Hero Page.jpg"
                alt="Community"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                width="550"
                height="310"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Student Clubs</h3>
                      <p className="text-muted-foreground">
                        Explore your interests and connect with like-minded individuals through our diverse student
                        clubs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Social Events</h3>
                      <p className="text-muted-foreground">
                        Attend a variety of social events, from movie nights to cultural celebrations, to build lasting
                        friendships.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Academic Support</h3>
                      <p className="text-muted-foreground">
                        Receive academic support through tutoring, workshops, and study groups to help you succeed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Mission</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Empowering Students to Thrive
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our hall of residence is dedicated to creating a supportive and enriching environment where students
                  can unlock their full potential. We strive to provide the resources, facilities, and community to help
                  you succeed academically and personally.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  If you have any questions or would like to schedule a tour, please don't hesitate to contact us. We're
                  here to help you find the perfect fit for your student experience.
                </p>
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
