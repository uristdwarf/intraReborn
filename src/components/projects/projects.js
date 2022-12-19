export const goAgain = {
    id: 1,
    name: "go-again",
    done: true,
    cost: 0,
    unlocked: true,
    nextID: 2,
    descURL: window.location.origin + "/assets/projects/go-again.md",
    tempDesc: window.location.origin + "/assets/projects/template.md",
    reviewers: [
        {
            username: "Raigo",
            reviewID: 1,
        },
        {
            username: "Olari",
            reviewID: 2,
        },
        {
            username: "Kris",
            reviewID: 3,
        },
    ],
    prevProject: 0,
    nextProject: 2,
}
export const miniFiglet = {
    id: 2,
    name: "mini-figlet",
    done: false,
    cost: 5,
    unlocked: false,
    nextID: null,
    descURL: window.location.origin + "/assets/projects/mini-figlet.md",
    tempDesc: window.location.origin + "/assets/projects/template.md",
    auditors: [],
    prevProject: 1,
    nextProject: 0,
}
export const data = [
    goAgain,
    miniFiglet,
];

export function getProjectByName(name) {
    for (const proj of data) {
        if (proj.name === name) {
            return proj;
        }
    }
    return {};
}
