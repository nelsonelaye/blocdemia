import { HiOutlineBookOpen } from "react-icons/hi2";
import { PiBellSimpleBold } from "react-icons/pi";
import elements from "@/assets/images/icons/elements.png";
import books from "@/assets/images/icons/book-open.png";
import medal from "@/assets/images/icons/medal.png";
import comunity from "@/assets/images/icons/user.png";
import bell from "@/assets/images/icons/notification.png";

export const routes = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: elements,
  },
  {
    name: "Courses",
    link: "/courses",
    icon: books,
  },
  {
    name: "Achievements",
    link: "/#achievements",
    icon: medal,
  },
  {
    name: "Community",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeTSJZP7RY9peAfPumnzLO2Bz1OhJImgscxGe7Aj5E_m3EPgQ/viewform?usp=send_form",
    icon: comunity,
  },
  {
    name: "Notification",
    link: "/#notification",
    icon: bell,
  },
];
