import Tabletop from "tabletop";

export default class API {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getExperiences(completion) {
    Tabletop.init({
      key: "19btLS6x866LNmlm-Gud_3w_j-gAJzNFQ-tN6Uoe5iPw",
      callback: googleData => {
        const experiences = [];
        var experience = null;
        for (var i = 0; i < googleData.length; i++) {
          if (googleData[i].id !== "") {
            if (experience) experiences.push(experience);
            experience = {
              id: googleData[i].id,
              title: googleData[i].title,
              description: [googleData[i].description],
              tags: [googleData[i].tags],
              gallery: googleData[i].gallery
            };
          } else {
            if (googleData[i].description !== "")
              experience.description.push(googleData[i].description);
            if (googleData[i].tags !== "")
              experience.tags.push(googleData[i].tags);
          }
        }
        experiences.push(experience);
        completion(experiences);
      },
      simpleSheet: true
    });
  }
}
