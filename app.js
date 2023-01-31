$(Document).Ready(Function () {
    // Add Smooth Scrolling To All Links
    $("A").On("Click", Function (Event) {
        // Make Sure This.Hash Has A Value Before Overriding Default Behavior
        If (This.Hash !== "") {
            // Prevent Default Anchor Click Behavior
            Event.PreventDefault();

            // Store Hash
            Var Hash = This.Hash;

            // Using JQuery's Animate() Method To Add Smooth Page Scroll
            // The Optional Number (800) Specifies The Number Of Milliseconds It Takes To Scroll To The Specified Area
            $("Html, Body").Animate(
                {
                    ScrollTop: $(Hash).Offset().Top,
                },
                900,
                Function () {
                    // Add Hash (#) To URL When Done Scrolling (Default Click Behavior)
                    Window.Location.Hash = Hash;
                }
            );
        } // End If
    });
});