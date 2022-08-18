import { Color } from 'three';
import { IfcViewerAPI } from 'web-ifc-viewer';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(0xffffff) });
viewer.grid.setGrid();
viewer.axes.setAxes();

async function loadIfc(url) {
    await viewer.IFC.setWasmPath("../");
    const model = await viewer.IFC.loadIfcUrl(url);
    viewer.shadowDropper.renderShadow(model.modelID);
}

// import { projects } from "./projects.js";

// const currentUrl = window.location.href; 
// const url = new URL(currentUrl);
// const currentProjectID = url.searchParams.get("id");
// const currentProject = projects.find(project => 
//     project.id === currentProjectID);

// const projectLink = currentProject.url;

// loadIfc(projectLink);

loadIfc('./ifc/01.ifc');