import type { MetaFunction } from "@remix-run/node";
import LanguageSwitcher from '~/components/LanguageSwitcher';
import Jobs from './jobs'
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
       <LanguageSwitcher />
     <Jobs/>
    </div>
  );
}

