import { Application } from "@reboot-dev/reboot";
import { Assistant } from "@reboot-dev/docubot-api/docubot/assistant/v1/assistant_rbt.js";
import { DOCUBOT_ASSISTANT_ID } from "../../constants.js";
import docubot from "@reboot-dev/docubot";

const initialize = async (context) => {
  await Assistant.construct({ id: DOCUBOT_ASSISTANT_ID })
    .idempotently()
    .create(context, {
      name: DOCUBOT_ASSISTANT_ID,
      url: "https://docs.reboot.dev",
    });
};

new Application({
  servicers: docubot.servicers(),
  initialize,
}).run();
