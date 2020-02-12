/**
 * TinyMceToolbarHandler handles the toolbar button.
 * @since 3.26.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 */

const TINYMCE_TOOLBAR_BUTTON_NAME = 'wl-faq-toolbar-button'

class TinymceToolbarHandler {
    /**
     * Construct the TinymceToolbarHandler
     * @param editor {tinymce.Editor} instance.
     */
    constructor( editor ) {
        this.editor = editor
    }
    addButtonToToolBar() {
        this.editor.addButton(TINYMCE_TOOLBAR_BUTTON_NAME, {
            title: 'Add Question',
            onclick: function() {
                ed.insertContent('Hello world!!');
            },
        });
        this.editor.render()
    }
}

export default TinymceToolbarHandler