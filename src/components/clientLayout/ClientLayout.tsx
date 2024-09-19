"use client";

import React,{ useContext }  from "react";
import { ApolloProvider } from "@apollo/client";
import { ConfigurationProvider } from "@/context/ConfigurationContext";
import client from "@/apollo";
import Header from "../header/header";
import { LocationProvider } from "@/context/LocationContext";
import Footer from "../footer/footer";
import GoogleMapsLoader from "../maps/mapLoader/googleMapsLoader";
import GoogleMapsProvider from "../maps/googleMapsProvider";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ApolloProvider client={client}>
      <ConfigurationProvider>
      <Header/>
        <LocationProvider>
        <GoogleMapsProvider>
            {children}
          </GoogleMapsProvider>
      <Footer/>
        </LocationProvider>
      </ConfigurationProvider>
    </ApolloProvider>
  );
}
