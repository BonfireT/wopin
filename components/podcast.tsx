const Podcast = () => {
  return (
    <section className="flex flex-col items-center bg-zinc-50 px-6 py-8 dark:bg-black">
      <iframe
        src="https://creators.spotify.com/pod/profile/womenofpurpose/embed/episodes/Lord--what-are-you-currently-doing--Acts-16-8-et2iht/a-a4r3iq4"
        height="102"
        width="400"
        style={{ border: "none" }}
        scrolling="no"
      />
    </section>
  );
};

export default Podcast;