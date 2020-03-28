
var formulaire=document.getElementById("formulaire");
			
formulaire.onsubmit=function()
{
			
	var nom=document.getElementById("nom"),
		prenom=document.getElementById("prenom"),
		mail=document.getElementById("mailto"),
		naissance=document.getElementById("date"),
		age=document.getElementById("age"),
		departement=document.getElementById("depart"),
		filiere=document.getElementById("fil"),
		niveau=document.getElementById("niveau"),
		cycle=document.getElementById("cycle"),
		matricule=document.getElementById("matri"),
		pass=document.getElementById("pass"),
		confirmer;
			
			if ( nom.value && prenom.value && mailto.value && date.value && age.value && depart.value && fil.value && niveau.value && cycle.value && matri.value && pass.value )
			{
				
					alert("Merci d'avoir fourni toutes ses informations dont nous avons besoin!");
					
					confirmer=confirm("Cliquer sur OK pour valider");
					if(confirmer)
					{
						alert("vous venez de confirmer votre inscription au sein de notre association. Merci!")
					}else{
						alert("Vous venez d'annuler toutes les informations!");
					}
			}else{
				
				alert("veillez saisir tous les champs!");
				
			}
}
			
			
			
