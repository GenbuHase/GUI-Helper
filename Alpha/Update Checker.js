function UpdateCheck() {
	new java.lang.Thread(
		new java.lang.Runnable({
			run: function () {
				try {
					var Connecter = new java.net.URL("https://raw.githubusercontent.com/GenbuHase/GUI-Helper/master/Alpha/After.js").openConnection();
						Connecter.connect();

					var AfterMod = new java.io.BufferedReader(new java.io.InputStreamReader(Connecter.getInputStream()));
					var AfterContent = "";

					while (AfterMod.readLine() != null) {
						AfterContent += AfterMod.readLine() + "\n";
					}

					clientMessage(AfterContent);
				} catch (Error) {
					clientMessage(Error);
				}
			}
		})
	).start();
}

function newLevel() {
	UpdateCheck();
}