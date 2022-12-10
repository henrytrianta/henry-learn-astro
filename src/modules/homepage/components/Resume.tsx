import Button from "../../common/components/Button";
import { BsBriefcase } from "solid-icons/bs";
import { RiSystemEyeLine } from "solid-icons/ri";

const resume = [
  {
    company: "Kesato & Co",
    title: "Project Manager",
    start: "2018",
    end: "Present",
  },
  {
    company: "Kesato & Co",
    title: "Quality Assurance, Quality Control",
    start: "2018",
    end: "2018",
  },
  {
    company: "Bali Home Immo",
    title: "Digital Marketing Manager",
    start: "2017",
    end: "2018",
  },
  {
    company: "Bali Custom Shirt",
    title: "Webmaster",
    start: "2017",
    end: "2017",
  },
];

const Resume = () => {
  return (
    <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 relative overflow-hidden">
      <canvas id="work-canvas" class="absolute top-0 left-0"></canvas>
      <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BsBriefcase class="h-6 w-6 flex-none" />
        <span class="ml-3">Work</span>
      </h2>

      <ol class="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li class="flex gap-4">
            <dl class="flex flex-auto flex-wrap gap-x-2">
              <dt class="sr-only">Company</dt>
              <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt class="sr-only">Role</dt>
              <dd class="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt class="sr-only">Date</dt>
              <dd
                class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time date-time={role.start}>{role.start}</time>
                <span aria-hidden="true">—</span>
                <time date-time={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <Button
        href="https://doc.henrytrianta.com/resume"
        variant="secondary"
        class="group mt-6 w-full"
        target="_blank"
      >
        See Resume
        <RiSystemEyeLine class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
};

export default Resume;
