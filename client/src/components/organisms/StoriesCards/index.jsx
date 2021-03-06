import React from "react";
import StoriesController from "../../molecules/StoriesController";
import StoriesSelfCard from "../../molecules/StoriesSelfCard";
import StoriesLinkCard from "../../molecules/StoriesLinkCard";

const post = {
  image:
    "https://playruneterra.com/assets/48b7bffe8468c1a99fabdd06f1897e8a709e3343/static/image/champions/Yasuo.jpg",
  category: "Atualização do PBE",
  title: "Atualização do PBE 27/01: Sion te amo"
};

const Stories = () => {
  return (
    <section className="stories">
      <StoriesController />
      <div className="stories__cards">
        <StoriesSelfCard post={post} />
        <StoriesLinkCard />
        <StoriesLinkCard />
      </div>
    </section>
  );
};

export default Stories;
