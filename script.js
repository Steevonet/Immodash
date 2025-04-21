// Afficher le Dashboard
function showDashboard() {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("dashboard-screen").classList.remove("hidden");
}

// Fonction d'ajout des données dans le tableau
document.getElementById("formulaire").addEventListener("submit", function(e) {
  e.preventDefault();

  const etat = document.getElementById("etat").value;
  const mandat = document.getElementById("mandat").value;
  const vendeur = document.getElementById("vendeur").value;
  const acquereur = document.getElementById("acquereur").value;
  const adresse = document.getElementById("adresse").value;
  const prix = document.getElementById("prix").value;
  const net = document.getElementById("net").value;
  const agentMandat = document.getElementById("agent-mandat").value;
  const agentVente = document.getElementById("agent-vente").value;

  // Créer une nouvelle ligne dans le tableau
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${etat}</td>
    <td>${mandat}</td>
    <td>${vendeur}</td>
    <td>${acquereur}</td>
    <td>${adresse}</td>
    <td>${prix}</td>
    <td>${net}</td>
    <td>${(prix - net) * 0.1}</td> <!-- Commission HT à 10% -->
    <td>${(prix - net) * 0.1 * 1.2}</td> <!-- Commission TTC -->
    <td>${agentMandat}</td>
    <td>${agentVente}</td>
  `;
  document.getElementById("tableau").appendChild(tr);

  // Réinitialiser le formulaire
  document.getElementById("formulaire").reset();
});