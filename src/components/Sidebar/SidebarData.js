import DashboardCustomizeTwoToneIcon from '@mui/icons-material/DashboardCustomizeTwoTone';
import ShoppingBasketTwoToneIcon from '@mui/icons-material/ShoppingBasketTwoTone';
import AssessmentTwoToneIcon from '@mui/icons-material/AssessmentTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import StoreTwoToneIcon from '@mui/icons-material/StoreTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

export const SidebarData = [
    {
        name: "Dashboard",
        to: "/",
        icon: <DashboardCustomizeTwoToneIcon />,
    },
    {
        name: "Sell Item",
        to: `/sell`,
        icon: <ShoppingBasketTwoToneIcon />
    },
    {
        name: "Report",
        to: `/report`,
        icon: <AssessmentTwoToneIcon />,
        subMenus: [
            {
                name: "Transaction",
                to: "/report/transaction",
                icon: <MonetizationOnTwoToneIcon />
            },
            {
                name: "Item",
                to: "/report/item",
                icon: <StoreTwoToneIcon />
            },
        ],
    },
    {
        name: "Employee",
        to: `/employee`,
        icon: <PersonOutlineTwoToneIcon />
    },
    {
        name: "Order Item",
        to: `/order`,
        icon: <LocalShippingTwoToneIcon />
    }
];