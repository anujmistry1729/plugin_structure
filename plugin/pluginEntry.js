const { OuterbasePluginTable_$PLUGIN_ID } = require("./pluginTable")
const { OuterbasePluginTableConfiguration_$PLUGIN_ID } = require("./pluginTableConfig")
window.customElements.define('outerbase-plugin-table-$PLUGIN_ID', OuterbasePluginTable_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-table-configuration-$PLUGIN_ID', OuterbasePluginTableConfiguration_$PLUGIN_ID)