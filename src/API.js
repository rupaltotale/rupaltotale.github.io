import Tabletop from "tabletop";

export default class API {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getDataAsObjects(data) {
    const dataObjects = [];
    var item = null;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id !== "") {
        if (item) dataObjects.push(item);
        item = {
          id: data[i].id,
          title: data[i].title,
          description: [data[i].description],
          tags: data[i].tags.split(","),
          gallery: data[i].gallery,
          startTime: data[i].startTime,
          endTime: data[i].endTime !== "" ? data[i].endTime : null
        };
      } else if (data[i].description !== "") {
        item.description.push(data[i].description);
        // if (experiencesData[i].tags !== '') item.tags.push(experiencesData[i].tags);
      }
    }
    dataObjects.push(item);
    return dataObjects;
  }

  getExperiences(completion) {
    Tabletop.init({
      key: "19btLS6x866LNmlm-Gud_3w_j-gAJzNFQ-tN6Uoe5iPw",
      simpleSheet: false,
      callback: (data, tabletop) => {
        const experiencesData = tabletop.sheets("Experiences").elements;
        completion(this.getDataAsObjects(experiencesData));
      }
    });
  }
}
