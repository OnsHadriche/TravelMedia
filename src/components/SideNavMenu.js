import React, { useState } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";


const SideNavMenu = ({ page,handleClickComponent}) => {



  return (
    <CDBSidebar textColor="#fff" backgroundColor="#14274E"  style = {{height: 746}} >
      <CDBSidebarHeader
        prefix={<i className="fa fa-bars" />}
      >
        {page?.title}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem
            icon="th-large"
            
            onClick={() => handleClickComponent( "dashbord")}
          >
            Dashboard
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem
            icon="bi bi-house-fill"
        
            onClick={() => handleClickComponent("createHotel")}
          >
            Add Offer Hotel
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem
            icon="bi bi-box2"
          
            onClick={() => handleClickComponent("createPack")}
          >
            Add Package
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem
            icon="bi bi-speaker"
            onClick={() => handleClickComponent("createEvent")}
          >
            Add Event
          </CDBSidebarMenuItem>
          {/* <CDBSidebarMenuItem icon="bi bi-people" > Add an administrator</CDBSidebarMenuItem> */}
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter>
        <CDBSidebarMenuItem icon="bi bi-gear-fill"> Setting</CDBSidebarMenuItem>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default SideNavMenu;
