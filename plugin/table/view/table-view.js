var templateTable_$PLUGIN_ID = document.createElement("template");

templateTable_$PLUGIN_ID.innerHTML = `
<style>
    #map{
        width: 100px
        height: 100px
    }
</style>

    <div id="map">
        <h2> Map to render</h2>
    </div>
`;

module.exports = { templateTable_$PLUGIN_ID };
