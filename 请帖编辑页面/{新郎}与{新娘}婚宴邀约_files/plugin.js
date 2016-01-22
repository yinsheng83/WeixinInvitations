CKEDITOR.plugins.add( 'reloadwebfont',
{
	
	init: function( editor )
	{
		
		//Plugin logic goes here.
		
		// Leo Move command decaration to mobile_invite_edit.asp
		//editor.addCommand( 'reloadWebFont',
		//	{
		//		exec : function( editor )
		//		{    
		//			//reloadWebFontProcess();
		//			var timestamp = new Date();
		//			editor.insertHtml( 'The current date and time is: <em>' + timestamp.toString() + '</em>' );
		//		}
		//	});

		editor.ui.addButton( 'reloadWebFont',
		{
			label: '重新載入字型',
			command: 'reloadWebFont',
			//icon: this.path + 'reloadwebfont.gif'
			icon: this.path + 'reload2.png'
			
		} );

	}
} );

/*
// JavaScript Document
(function(){
//Section 1 : Code to execute when the toolbar button is pressed
var a= {
exec:function(editor){
 var theSelectedText = editor.getSelection().getNative();
 alert(theSelectedText);
}
},

//Section 2 : Create the button and add the functionality to it
b='addTags';
CKEDITOR.plugins.add(b,{
init:function(editor){
editor.addCommand(b,a);
editor.ui.addButton("addTags",{
    label:'Add Tag', 
    icon:this.path+"addTag.gif",
    command:b
    });
}
}); 
})();
*/