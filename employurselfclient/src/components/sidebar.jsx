import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import PageviewIcon from '@material-ui/icons/Pageview';


const useStyles = makeStyles((theme) => ({
    sidebar: {
      float: 'left'
    },
    header: {
        height: 50
    }
}));


export default function Sidebar(){
    const classes = useStyles();
    return(
        <ProSidebar className={classes.sidebar}>
            <SidebarHeader className={classes.header}>
                <h2 align="center" >EmployUrself</h2>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<AccountCircleIcon />} > 
                        Profil
                        <Link to="/" />
                    </MenuItem>
                    <MenuItem icon={<AutorenewIcon />}>
                        Suchen
                        <Link to="/search" />
                    </MenuItem>
                    <MenuItem icon={<FolderOpenIcon />}>
                        Offene Bewerbungen
                        <Link to="/applications" />
                    </MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <h3>©Team of EmployUrself</h3>
            </SidebarFooter>
        </ProSidebar>
    )
}