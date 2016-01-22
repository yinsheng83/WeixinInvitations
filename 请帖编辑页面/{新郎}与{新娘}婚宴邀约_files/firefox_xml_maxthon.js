
    var getXmlDoc = function( xmldata)
    {
      
         var xmlDoc = null;
         
         if (window.ActiveXObject || navigator.appVersion.indexOf('Trident') > 0){  　　 
             
             xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
             xmlDoc.loadXML( xmldata);
                         
         }else{
             
             //var xmlDoc = document.implementation.createDocument("text/xml", "", null);
             parser = new DOMParser();
             xmlDoc = parser.parseFromString( xmldata, "text/xml");
             
         }  
         
         return xmlDoc;
      
    }
    
    var GetNodeValue = function(obj)
    {
      var str = "";
      if(window.ActiveXObject || navigator.appVersion.indexOf('Trident') > 0)    //IE
      {
          str = obj.text;
      }
      else //Mozilla
      {
          try
      {
         str = obj.childNodes[0].nodeValue;
      }
      catch(ex)
      {
         str = "";
      }
      }
      return str;
    }


    var SetNodeValue = function(obj, str)
    {
      
      if(window.ActiveXObject || navigator.appVersion.indexOf('Trident') > 0)    //IE
      {
          obj.text = str;
      }
      else //Mozilla
      {
          try
      {
          if( obj.hasChildNodes()){
              obj.childNodes[0].nodeValue = str;
          }else{
              
             if( obj.getAttribute("dataType") == 'textField' || obj.getAttribute("dataType") == 'textArea'){

                  var x = document.createTextNode( str);
                  
                  obj.appendChild(x);
                  
                                    
             }
              
          }

      }
      catch(ex)
      {
          //alert('error');
      }
      }
     
    }

    var SetNodeValue2 = function(obj, str)
    {
      
      if(window.ActiveXObject || navigator.appVersion.indexOf('Trident') > 0)    //IE
      {
          obj.text = str;
      }
      else //Mozilla
      {
          try
      {
          
          obj.nodeValue = str;
      }
      catch(ex)
      {
          alert('error');
      }
      }
     
    }

    
    //if(document.implementation && document.implementation.createDocument)
    if (!window.ActiveXObject && navigator.appVersion.indexOf('Trident') <= 0){  　　 
    {
        XMLDocument.prototype.loadXML = function(xmlString)
        {
            var childNodes = this.childNodes;
            for (var i = childNodes.length - 1; i >= 0; i--)
               this.removeChild(childNodes[i]);
            
            var dp = new DOMParser();
            var newDOM = dp.parseFromString(xmlString, "text/xml");
            var newElt = this.importNode(newDOM.documentElement, true);
            this.appendChild(newElt);
        };

    }


        
    // check for XPath implementation
    if( document.implementation.hasFeature("XPath", "3.0") )
    {
        // prototying the XMLDocument
        XMLDocument.prototype.selectNodes = function(cXPathString, xNode)
        {
            if( !xNode ) { xNode = this; }
            
            var oNSResolver = this.createNSResolver(this.documentElement)
            var aItems = this.evaluate(cXPathString, xNode, oNSResolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
            var aResult = [];
            for( var i = 0; i < aItems.snapshotLength; i++)
            {
                aResult[i] = aItems.snapshotItem(i);
            }
            
            return aResult;
        }    
            
        
        // prototying the XMLDocument
        XMLDocument.prototype.selectSingleNode = function(cXPathString, xNode)
        {
            if( !xNode ) { xNode = this; }
            
            var xItems = this.selectNodes(cXPathString, xNode);
            
            if( xItems.length > 0 )
            {
              return xItems[0];
            }
            else
            {
              return null;
            }
        }
           

        // prototying the Element
/*** 
        Element.prototype.selectNodes = function(cXPathString)
        {
            if(this.ownerDocument.selectNodes)
            {
              return this.ownerDocument.selectNodes(cXPathString, this);
            } 
            else{throw "For XML Elements Only";}
        }
        
        // prototying the Element
    
        Element.prototype.selectSingleNode = function(cXPathString)
        {   
        if(this.ownerDocument.selectSingleNode)
        {
           return this.ownerDocument.selectSingleNode(cXPathString, this);
        }
        else{throw "For XML Elements Only";}
        }
***/


       
               // var domParser = new window.DOMParser();
               // _xmlDom = domParser.parseFromString(content, 'text/xml');
                Element.prototype.selectSingleNode = function(sXPath){
                    var oEvaluator = new XPathEvaluator();
                    var oResult = oEvaluator.evaluate(sXPath,this,null, XPathResult.FIRST_ORDERED_NODE_TYPE,null);
                    if(null != oResult){
                        return oResult.singleNodeValue;
                    }
                    return null;
                }
               
                Element.prototype.selectNodes = function(sXPath){
                    var oEvaluator = new XPathEvaluator();
                    var oResult = oEvaluator.evaluate(sXPath,this,null, XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);
                    var aNodes = new Array();
                    if(null != oResult){
                        var oElement = oResult.iterateNext();
                        while(oElement){
                            aNodes.push(oElement);
                            oElement = oResult.iterateNext();
                        }
                    }
                    return aNodes;
                }
               
                Element.prototype.__defineGetter__("text",function(){ return this.textContent; });       


    }
    
    // check for XPath implementation
    if( document.implementation.hasFeature("XPath", "3.0") )
    {

    }
}
    