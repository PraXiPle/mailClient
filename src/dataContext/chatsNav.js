import { MdMoveToInbox } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
export const navArr = [
    {
        name: "inbox",
        to: "inbox",
        icon: MdMoveToInbox
    },
    {
        name: "Send Emails",
        to: "sent",
        icon: IoIosSend
    },
    {
        name: "Favorite",
        to: "favorite",
        icon: FaStar
    },
    {
        name: "Draft",
        to: "draft",
        icon: RiPencilFill
    },
    {
        name: "Deleted",
        to: "deleted",
        icon: IoTrashBin
    },

]
