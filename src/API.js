import Tabletop from "tabletop";
import _ from "lodash";

export default class API {
  constructor() {
    this.allTags = [];
    this.tagsFiltered = false;
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
          tags: data[i].tags
            .split(",")
            .map(tag => {
              const value = tag.toLowerCase().trim();
              const tagObj = {
                value,
                label: this.getTagFormatted(value)
              };
              this.allTags.push(tagObj);
              return tagObj;
            })
            .sort(function(tag1, tag2) {
              return tag1.value.localeCompare(tag2.value);
            }),
          gallery: data[i].gallery,
          startTime: data[i].startTime,
          endTime: data[i].endTime !== "" ? data[i].endTime : null,
          projectType: data[i].projectType,
          url: data[i].url
        };
      } else if (data[i].description !== "") {
        item.description.push(data[i].description);
        // if (experiencesData[i].tags !== '') item.tags.push(experiencesData[i].tags);
      }
    }
    dataObjects.push(item);
    return this.getSortByDate(dataObjects);
  }

  getSortByDate(dataObjects) {
    const comparisonArray = [
      "Winter",
      "Jan",
      "Feb",
      "Mar",
      "Spring",
      "Apr",
      "May",
      "Jun",
      "Summer",
      "Jul",
      "Aug",
      "Sep",
      "Fall",
      "Oct",
      "Nov",
      "Dec"
    ];
    return dataObjects.sort((obj1, obj2) => {
      const date1 = obj1.startTime.split(" ");
      const date2 = obj2.startTime.split(" ");
      if (date1[1] === date2[1]) {
        return (
          comparisonArray.indexOf(date2[0]) - comparisonArray.indexOf(date1[0])
        );
      }
      return date2[1] - date1[1];
    });
  }

  get(sheet, completion) {
    Tabletop.init({
      key: "19btLS6x866LNmlm-Gud_3w_j-gAJzNFQ-tN6Uoe5iPw",
      simpleSheet: false,
      callback: (data, tabletop) => {
        // const experiencesData = tabletop.sheets(sheet).elements;
        completion(this.getDataAsObjects(tabletop.sheets(sheet).elements));
      }
    });
  }

  getTagFormatted(tag: string): String {
    const special = {
      npm: "npm",
      javascript: "JavaScript",
      react: "React",
      "react-native": "React-Native",
      html: "HTML",
      css: "CSS",
      mongodb: "MongoDB",
      mysql: "MySQL",
      express: "Express",
      xcode: "XCode",
      jquery: "jQuery",
      php: "PHP",
      "android studio": "Android Studio",
      json: "JSON",
      "ruby on rails": "Ruby on Rails",
      "sql server": "SQL Server",
      wordpress: "WordPress",
      "visual basic": "Visual Basic"
    };
    const displayTag = special[tag];
    return displayTag ? displayTag : tag[0].toUpperCase() + tag.slice(1);
  }

  getUniqueTags(shouldReturn: boolean) {
    if (shouldReturn)
      return _.uniqBy(this.allTags, "value").sort(function(tag1, tag2) {
        return tag1.value.localeCompare(tag2.value);
      });
    return [];
  }
}
