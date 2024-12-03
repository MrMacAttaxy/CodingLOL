// JavaScript to dynamically generate, style links, and add a close button
document.addEventListener("DOMContentLoaded", () => {
    const links = [
        { url: "https://cascadingstylesheets.mciahh.org/", text: "https://cascadingstylesheets.mciahh.org/" },
        { url: "https://learning.tatuarte.cl/", text: "https://learning.tatuarte.cl/" },
        { url: "https://edu.tatuarte.cl/", text: "https://edu.tatuarte.cl/" },
    ];

    const container = document.createElement("div");
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
    container.style.gap = "15px";
    container.style.margin = "20px";
    container.style.padding = "10px";
    document.body.appendChild(container);

    links.forEach(link => {
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.padding = "10px";
        wrapper.style.borderRadius = "5px";
        wrapper.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        wrapper.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
        wrapper.style.textAlign = "center";
        wrapper.style.transition = "transform 0.3s";
        wrapper.style.fontSize = "16px";
        wrapper.style.color = "white";
        wrapper.style.overflow = "hidden";

        const linkElement = document.createElement("a");
        linkElement.href = link.url;
        linkElement.textContent = link.text;
        linkElement.style.textDecoration = "none";
        linkElement.style.color = "white";

        // Close button
        const closeButton = document.createElement("button");
        closeButton.textContent = "X";
        closeButton.style.position = "absolute";
        closeButton.style.top = "5px";
        closeButton.style.right = "5px";
        closeButton.style.background = "red";
        closeButton.style.color = "white";
        closeButton.style.border = "none";
        closeButton.style.borderRadius = "50%";
        closeButton.style.width = "20px";
        closeButton.style.height = "20px";
        closeButton.style.cursor = "pointer";

        closeButton.addEventListener("click", () => {
            container.removeChild(wrapper);
        });

        wrapper.addEventListener("mouseover", () => {
            wrapper.style.transform = "scale(1.05)";
        });
        wrapper.addEventListener("mouseout", () => {
            wrapper.style.transform = "scale(1)";
        });

        wrapper.appendChild(linkElement);
        wrapper.appendChild(closeButton);
        container.appendChild(wrapper);
    });
});
