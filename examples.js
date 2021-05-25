const LOGGER_TIME = 1255;

// Source Code Management
function exampleLog(...messages) {
  console.log(messages?.join(", "));
}

// TODO: zbędna funkcja
function createEmptyMessage() {
  const none = "";
  console.warn(none);
}
