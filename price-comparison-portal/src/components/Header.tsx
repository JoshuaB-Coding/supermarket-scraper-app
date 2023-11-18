import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import '../styles/header.css';

type HeaderItem = {
    text: string;
    href: string;
};

function Header() {
    const links: HeaderItem[] = [
        {
            text: "Home",
            href: "/home",
        },
        {
            text: "About Me",
            href: "/about-me",
        },
    ];

    const linkItemBaseClass = 'nav-link-item';

    const handleNavLinkStatus = ({ isActive }: { isActive: boolean }) => {
        const statusClass = isActive ? 'active' : 'inactive';
        return `${linkItemBaseClass} ${statusClass}`;
    };

    const headerLinks = links.map((link) => (
        <NavLink to={link.href} className={handleNavLinkStatus}>
            {link.text}
        </NavLink>
    ));

    return (
        <AppBar position="static">
            <Toolbar variant="dense" className="main-header">
                <Box display="Flex" flexGrow={1} alignItems="center" gap="2rem">
                    <Typography variant="h6" color="inherit" component="div">
                        UK Supermarket Prices
                    </Typography>
                    {headerLinks}
                </Box>
                <Typography variant="h6" color="inherit" component="div">
                    josh-b-coding
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
