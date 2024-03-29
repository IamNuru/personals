import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function CustomLink({ children, to, text, color, ...others }) {
    const location = useLocation();
    const matched = location.pathname === to;

    return (
        <Button {...others} sx={{ mx: 1 }} className={`custom-link ${matched ? 'active-custom-link' : ''}`}>
            <Link to={to} className='merriweather' style={{ color: color }}>{text}</Link>
        </Button>
    )
}

export default CustomLink;