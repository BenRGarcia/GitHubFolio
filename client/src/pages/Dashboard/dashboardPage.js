import React, { Component } from 'react';
import { DashboardContainer } from "../../containers/DashbboardContainer/DashboardContainer.js";
import { Wrapper } from '../../components/Wrapper/Wrapper.js';
import { DashboardSidebar } from '../../components/DashboardSidebar/DashboardSidebar.js';

const DashboardPage = () => (
  <Wrapper>
    <DashboardContainer />
  </Wrapper>
);

export default DashboardPage
