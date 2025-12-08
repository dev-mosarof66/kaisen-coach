export const getInitials = (team) =>
    team
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()