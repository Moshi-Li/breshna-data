import ImportedGames from "./games.json";

const Games = ImportedGames as Array<any>;

//IDENTIFY THE TIER OF USER

//WHEN WHERE MOST GAMES WERE CREATED​
export const gameCreateTime = () => {
  const data = [
    {
      x: Games.map((item) => {
        const date = new Date(item.createdAt);
        return `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${
          date.getUTCDate() + 1
        }`;
      }),
      type: "histogram",
    },
  ];
  console.log(data[0].x[0]);
  return {
    data,
    title: "WHEN MOST GAMES WERE CREATED​​?​",
  };
};

//HOW MANY GAMES ARE IN DRAFT MODE AND HOW MANY ARE CREATED​
export const gameMode = () => {
  const usedCount = Games.filter((item) => item.status === "draft").length;
  const idleCount = Games.length - usedCount;
  const data = [
    {
      values: [usedCount, idleCount],
      labels: ["draft mode", "In other modes"],
      type: "pie",
    },
  ];

  return {
    data,
    title: `HOW MANY GAMES ARE IN DRAFT MODE AND HOW MANY ARE CREATED​? ${usedCount} out of ${
      usedCount + idleCount
    }​`,
  };
};

//HOW MANY GAMES ARE BEING USED​
export const gameUsed = () => {
  const usedCount = Games.filter(
    (item) => parseInt(item.total_plays) > 0
  ).length;
  const idleCount = Games.length - usedCount;
  const data = [
    {
      values: [usedCount, idleCount],
      labels: ["Used games", "Not used games"],
      type: "pie",
    },
  ];

  return {
    data,
    title: `HOW MANY GAMES ARE BEING USED? ${usedCount} out of ${
      usedCount + idleCount
    }`,
  };
};

export const gameSound = () => {
  const idleCount = Games.filter((item) => item.sound === "").length;
  const usedCount = Games.length - idleCount;
  const data = [
    {
      values: [usedCount, idleCount],
      labels: ["Games with sound", "Games without sound"],
      type: "pie",
    },
  ];

  return {
    data,
    title: `HOW MANY GAMES ARE USES SOUND/ NO SOUND​? ${usedCount} out of ${
      usedCount + idleCount
    }​`,
  };
};

//HOW MANY USERS LOGIN EVERYDAY​

//HOW MANY USERS LOGIN EVERY WEEK​
