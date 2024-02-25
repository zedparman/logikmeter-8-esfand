"use client";
import { Link, usePathname } from "@/navigations";
import { cn } from "@/lib/utils";
import { Home, Settings, SquarePen, ScrollText } from "lucide-react";
import NavContract from "./NavContract";

const DashboardNav = ({ t, session }) => {
  // console.log(t);
  const navItems = [
    { name: t.Home, href: "/accounts/dashboard", icon: Home },

    {
      name: t.CreateQuestion,
      href: "/accounts/dashboard/create-question",
      icon: SquarePen,
    },
    {
      name: t.QuestionsList,
      href: "/questions",
      icon: ScrollText,
    },
    {
      name: t.MyQuestions,
      href: "/accounts/dashboard/questions-list",
      icon: ScrollText,
    },
    {
      name: t.saveQuestions,
      href: "/accounts/dashboard/save-questions",
      icon: ScrollText,
    },
    { name: t.Settings, href: "/accounts/dashboard/settings", icon: Settings },
  ];

  const pathname = usePathname();
  return (
    <nav className="grid items-start gap-2">
      {session == null ? (
        <>
          <Link href={"/signin"}>{t.Index.signIn}</Link>
          <Link href={"/signup"}>{t.Index.signUp}</Link>
          <Link href={"/questions"}>{t.Index.questions}</Link>
        </>
      ) : (
        <>
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="bg-card">
              <span
                className={cn(
                  "group flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent" : "bg-transparent"
                )}
              >
                <item.icon className=" h-4 w-4 text-primary" />
                <span>{item.name}</span>
              </span>
            </Link>
          ))}
          <NavContract text={t.ConnectWallet} fatext={t.WalletNameS} />
        </>
      )}
      
    </nav>
  );
};

export default DashboardNav;
