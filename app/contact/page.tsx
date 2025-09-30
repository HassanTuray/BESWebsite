export default function ContactPage() {
  return (
    <section className="mx-auto grid min-h-[80dvh] place-items-center px-4">
      {/* Contact card */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
        <h1 className="text-2xl font-semibold">Contact Us</h1>

        <form className="mt-6 space-y-4" method="post" action="#">
          <div>
            <label htmlFor="name" className="block text-sm">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="Your name"
            />
          </div>

          {/* Role selector */}
          <div className="flex flex-col gap-2">
            <label htmlFor="role" className="text-sm font-medium">
              Who is leaving a message?
            </label>
            <select
              id="role"
              name="role"
              className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white
                        focus:outline-none focus:ring-2 focus:ring-slate-400/60
                        [color-scheme:dark]"
              defaultValue="alumni"
              required
            >
              <option value="alumni"  className="bg-[#0B1220] text-white">Alumni</option>
              <option value="company" className="bg-[#0B1220] text-white">Company Representative</option>
              <option value="other"   className="bg-[#0B1220] text-white">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 p-3 text-white placeholder-white/60 focus:border-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/10 px-4 py-3 font-medium hover:bg-white/15"
          >
            Send
          </button>
        </form>
      </div>

      {/* Socials row */}
      <div className="mt-8 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/besumcp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit us on LinkedIn"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 hover:bg-white/10"
        >
          <img
            src="https://cdn.simpleicons.org/linkedin/ffffff"
            alt=""
            width="24"
            height="24"
          />
        </a>

        <a
          href="https://www.instagram.com/besumcp/?igsh=MWR1MXNmbHJveHFxdQ%3D%3D#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit us on Instagram"
          className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 hover:bg-white/10"
        >
          <img
            src="https://cdn.simpleicons.org/instagram/ffffff"
            alt=""
            width="24"
            height="24"
          />
        </a>
      </div>
    </section>
  );
}
