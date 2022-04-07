import { BsFillPersonLinesFill } from "react-icons/bs";

import { BiBookBookmark, BiBookAdd } from "react-icons/bi";

const drawerlinks = ({ iconprops }) => [
  {
    name: "courses",
    label: "Courses",
    icon: <BiBookBookmark {...iconprops} />,
  },
  {
    name: "users",
    label: "Users",
    icon: <BsFillPersonLinesFill {...iconprops} />,
  },
  {
    name: "create-course",
    label: "Create Course",
    icon: <BiBookAdd {...iconprops} />,
  },
];

export default drawerlinks;
