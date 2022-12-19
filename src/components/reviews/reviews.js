export const CURR_REVIEWS = [{
    id: 4,
    projectName: "go-again",
    projectID: 1,
    reviewingName: "Raigo",
    reviewingID: 2,
}];

export const REVIEWS = [{
    id: 4,
    projectName: "go-again",
    projectID: 1,
    revieweingName: "Raigo",
    reviewingID: 2,
    descURL: window.location.origin + "/assets/projects/mini-figlet.md",
    tempDesc: window.location.origin + "/assets/projects/template.md",
}];

export function GetReviewByID(id) {
    for (const rev of REVIEWS) {
        if (rev.id === parseInt(id)) {
            return rev
        }
    }
    return {}
}
