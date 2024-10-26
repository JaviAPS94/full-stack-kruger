import logger from "../utils/logger.js";

const testLogs = async (req, res) => {
  try {
    // logger.error("Esto es un error");
    // logger.warn("Esto es un warn");
    // logger.info("Esto es un info");
    // logger.http("Esto es un http");
    // logger.verbose("Esto es un verbose");
    // logger.debug("Esto es un debug");
    // logger.silly("Esto es un silly");
    logger.error("Esto es un error");
    logger.warning("Esto es un warning");
    logger.info("Esto es un info");
    logger.debug("Esto es un debug");
    res.send({ message: "Logs test" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { testLogs };
