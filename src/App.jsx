import { useState } from 'react';

const navLinks = ['Courses', 'Success Stories', 'Community', 'Contact'];
const dashboardButtons = [
  { label: 'Explore Courses', action: 'Exploring courses...' },
  { label: 'Schedule Mentor Help', action: 'Opening mentor scheduling...' },
  { label: 'Career Support', action: 'Showing career support options...' },
  { label: 'Download Syllabus', action: 'Downloading course syllabus...' },
];
const courses = [
  { title: 'Full Stack Development', description: 'Build production-ready apps with React, Node.js, and databases.' },
  { title: 'Data Science & ML', description: 'Learn Python, analytics, and real-world ML workflows.' },
  { title: 'Competitive Programming', description: 'Sharpen core problem-solving and interview skills with expert mentors.' },
];
const stats = [
  { value: '250K+', label: 'Learners' },
  { value: '15K+', label: 'Hiring Partners' },
  { value: '98%', label: 'Placement Rate' },
];
const features = [
  { title: 'AI-powered curriculum', description: 'Learn with tools and projects aligned to modern hiring needs.' },
  { title: 'Live mentorship', description: 'Get doubt support and guidance from top practitioners every week.' },
  { title: 'Career-ready outcomes', description: 'Build a strong portfolio and prepare for interviews with confidence.' },
];
const companies = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Uber', 'Flipkart'];
const testimonials = [
  { name: 'Aarav', role: 'Software Engineer', quote: 'The mentorship and projects made my transition into tech feel real and manageable.' },
  { name: 'Nisha', role: 'Data Analyst', quote: 'The curriculum helped me move from beginner to job-ready with structured support.' },
];

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('Enter your username to unlock the right course for you.');
  const [activeSection, setActiveSection] = useState('Courses');

  const handleLogin = (event) => {
    event.preventDefault();
    const trimmedName = username.trim() || 'Guest';

    setUser(trimmedName);
    setMessage(`Welcome, ${trimmedName}! Your personalized learning path is ready.`);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMessage(`Showing ${section}.`);
  };

  const handleAction = (action) => {
    setMessage(action);
  };

  const handleLogout = () => {
    setUser(null);
    setUsername('');
    setActiveSection('Courses');
    setMessage('You have been logged out.');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-slate-100">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-lg font-semibold text-white">
              CN
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Coding Ninjas</p>
              <p className="text-sm text-slate-400">Transform your future</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="transition hover:text-white">
                {link}
              </a>
            ))}
          </nav>
          <button className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-white">
            Login
          </button>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <section className="grid items-center gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl xl:grid-cols-[1.08fr_0.92fr] xl:p-12">
            <div className="space-y-8">
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-300">
                AI-powered learning ecosystem
              </span>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Give your career an unfair AI advantage.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Build job-ready skills with live mentorship, modern AI-focused curriculum, and industry projects that stand out in interviews.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Explore courses
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white"
                >
                  Book a free webinar
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-6 shadow-2xl shadow-black/30">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Start now</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Find the right course for you</h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Enter a username and we’ll guide you toward a learning path that matches your career goals.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="text-sm font-medium text-slate-200">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter your username"
                    className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  Continue
                </button>
              </form>
              <p className="mt-4 text-xs leading-6 text-slate-500">
                By continuing, you agree to our terms and privacy policy.
              </p>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/10">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">{feature.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-black/20">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">Trusted by learners</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Join thousands building career-ready skills.</h2>
                <p className="mt-4 text-base leading-8 text-slate-400">
                  From freshers to working professionals, learners trust Coding Ninjas for structured guidance, mentorship, and hands-on projects.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {companies.map((company) => (
                  <span key={company} className="rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-slate-300">
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/10">
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <div className="mt-5">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 text-lg font-semibold text-white">
              CN
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Coding Ninjas</p>
              <p className="text-sm text-slate-400">Dashboard</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-3">
            {navLinks.map((link) => (
              <button
                key={link}
                type="button"
                onClick={() => handleNavigation(link)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === link ? 'bg-sky-500 text-white' : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'}`}
              >
                {link}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">{user}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-full border border-slate-700 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="space-y-10 px-6 py-8 lg:px-8">
        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Welcome back, {user}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                Your personalized learning dashboard is ready. Pick a next step and start building momentum today.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {dashboardButtons.slice(0, 2).map((button) => (
                  <button
                    key={button.label}
                    type="button"
                    onClick={() => handleAction(button.action)}
                    className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:w-[34rem]">
              {stats.map((item) => (
                <div key={item.label} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-6">
                  <p className="text-3xl font-semibold text-white">{item.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {message && (
            <div className="mt-10 rounded-[1.5rem] border border-sky-500/20 bg-sky-500/10 p-6 text-sky-100">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Status</p>
              <p className="mt-3 text-base leading-7">{message}</p>
            </div>
          )}
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Recommended path</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Full Stack Web Development</h2>
            <p className="mt-4 text-slate-400">
              Learn React, Node.js, APIs, and deployment workflows while building portfolio-ready projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => handleAction('Opening course details...')}
                className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                View course
              </button>
              <button
                type="button"
                onClick={() => handleAction('Starting enrollment...')}
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white"
              >
                Enroll now
              </button>
            </div>
          </div>

          <div className="grid gap-4">
            {dashboardButtons.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleAction(item.action)}
                className="rounded-[1.5rem] border border-slate-800 bg-slate-900/90 p-5 text-left transition hover:border-sky-400/50 hover:bg-slate-800"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{item.label}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">Tap to trigger a live response.</p>
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Popular programs</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Choose a path that matches your goals.</h2>
            </div>
            <button
              type="button"
              onClick={() => handleAction('Opening all programs...')}
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-white"
            >
              View all programs
            </button>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.title} className="rounded-[1.5rem] border border-slate-800 bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Course</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{course.title}</h3>
                <p className="mt-3 text-slate-400">{course.description}</p>
                <button
                  type="button"
                  onClick={() => handleAction(`Loading details for ${course.title}...`)}
                  className="mt-6 inline-flex rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
                >
                  View details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-black/20">
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Ready to grow</p>
            <p className="mt-3 text-sm text-slate-400">Logged in as {user}. Choose a course and continue your journey.</p>
          </div>
          <button
            type="button"
            onClick={() => handleAction('Opening support chat...')}
            className="rounded-full bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
          >
            Contact support
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
