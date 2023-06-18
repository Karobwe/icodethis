/**
 * Drag and drop
 */
window.addEventListener("DOMContentLoaded", () => {
    const tasks = document.querySelectorAll("article");
    const dropZones = document.querySelectorAll(".dropzone");

    tasks.forEach((article, key) => {
        article.id = `task-${key}`;

        article.addEventListener("dragstart", (event) => {
            event.dataTransfer.setData("application/kanban", event.target.id);
            event.dataTransfer.dropEffect = "move";
        });
    });

    dropZones.forEach((zone) => {
        let tailwindBorder = ["border-2", "border-dashed", "border-slate-600/20"];

        zone.addEventListener("drop", (event) => {
            event.preventDefault();

            let data = event.dataTransfer.getData("application/kanban");
            try {
                event.target.appendChild(document.getElementById(data));
            } catch (error) {
                // TODO: do something (or not) when user drop the item on original parent
                // console.error(error);
            }
        });

        zone.addEventListener("dragover", (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        });

        zone.addEventListener("dragenter", (event) => {
            zone.classList.add(...tailwindBorder);
        });

        zone.addEventListener("dragleave", (event) => {
            zone.classList.remove(...tailwindBorder);
        });

        zone.addEventListener("dragend", (event) => {
            zone.classList.remove(...tailwindBorder);
        });
    });
});

/**
 * Add new task's form submission
 */
const taskColumns = document.querySelectorAll("section");
taskColumns.forEach(column => {
    let addTaskButton = column.querySelector("button");

    addTaskButton.addEventListener("click", () => {
        let form = document.querySelector("#add-task-form");
        let submit = form.querySelector("#add-task");
        let cancel = form.querySelector("#cancel-add-task");
        let dropZone = column.querySelector(".dropzone");
        let tagInput = document.querySelector("#tag-input");
        let tagsContainer = document.querySelector("#tags");

        // HAX: somthing broken when user click the add card button, all buttons on others section stay hidden
        // Temporary fix
        document.querySelectorAll("section button").forEach(btn => btn.classList.remove("hidden"));

        addTaskButton.classList.add("hidden");
        form.classList.remove("hidden");
        addTaskButton.parentNode.appendChild(form);

        tagInput.addEventListener("blur", () => {
            let tagList = tagInput.value.split(',');
            tagList.forEach(tag => {
                let li = document.createElement("li");
                li.classList = "bg-slate-100 text-slate-500 text-sm px-2 rounded-full";
                li.innerHTML = tag.trim();

                tagsContainer.appendChild(li);
            });
        });

        cancel.addEventListener("click", (e) => {
            e.preventDefault();
            form.reset();
            addTaskButton.classList.remove("hidden");
            form.classList.add("hidden");
        });

        submit.addEventListener("click", e => {
            e.preventDefault();

            const inputs = form.elements;
            let [title, team, priority, collaboratorsCount, commentsCount, tags] = [
                inputs["title"].value,
                inputs["team"].value,
                inputs["priority"].value,
                inputs["collaborators"].value,
                inputs["comments"].value,
                inputs["tag-input"].value.split(','),
            ];

            let task = {
                title: title !== "" ? title : "New task",
                team: team,
                priority: priority,
                collaboratorsCount: collaboratorsCount | randomInt(),
                commentsCount: commentsCount | randomInt(),
                tags: tags,
            };

            console.log(task);

            let clone = document.querySelector("article").cloneNode(true);
            clone.querySelectorAll(".task--tags > div").forEach(t => t.parentElement.removeChild(t));

            let cloneTagsContainer = clone.querySelector(".task--tags");
            clone.querySelector(".task--title").innerHTML = task.title;
            clone.querySelector(".task--priority").innerHTML = task.priority;
            clone.querySelector(".task--collaborators").innerHTML = task.collaboratorsCount;
            clone.querySelector(".task--comments").innerHTML = task.commentsCount;

            task.tags.forEach(tag => {
                let div = document.createElement("div");
                div.classList = "bg-slate-200 text-slate-500 text-sm capitalize px-2 rounded-full";
                div.innerHTML = tag.trim();
                cloneTagsContainer.appendChild(div);
            });

            let currentPriority = clone.querySelector(".task--priority");
            currentPriority.innerHTML = task.priority;
            switch (task.priority) {
                case "high":
                    currentPriority.classList.add("bg-red-400");
                    break;

                case "medium":
                    currentPriority.classList.add("bg-blue-400");
                    break;

                default:
                    currentPriority.classList.add("bg-teal-400");
                    break;
            }

            let currentTeam = clone.querySelector(".task--team");
            let currentLogo = currentTeam.querySelector("svg"); // Because I'm tired, I'll try something else next time
            currentTeam.removeChild(currentLogo);
            let img = document.createElement("img");
            img.classList = "w-8 h-auto object-contain";
            switch (task.team) {
                case "design":
                    img.src = "https://asset.brandfetch.io/id20mQyGeY/idnZiPe__8.svg?updated=1668515567942";
                    break;

                case "marketing":
                    img.src = "https://asset.brandfetch.io/idGP0S1Jjj/idZ9N9-4je.svg?updated=1668516044192";
                    break;

                default:
                    img.src = "https://asset.brandfetch.io/idkuvXnjOH/idSJDOXst-.svg?updated=1668516049706";
                    break;
            }
            currentTeam.appendChild(img);


            dropZone.appendChild(clone);
        });
    });
});

// const data = {};
// localStorage.setItem("tasks", JSON.stringify(data));
// let tasks = localStorage.getItem("tasks");

// console.log("retrieved object: ", JSON.parse(tasks));

/**
 * THIS SECTION IS NOT USED FOR NOW
 * 
 * Simulate a dropdown with iconss.
 * (The HTML markup is at the bottom of the page with hidden class)
 */
const teamButton = document.querySelector("#dropdown-team-button");
const teamDropdown = document.querySelector("#dropdown-team");
teamButton.addEventListener("click", (e) => {
    teamDropdown.classList.toggle("hidden");
});

let randomInt = (min = 1, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}