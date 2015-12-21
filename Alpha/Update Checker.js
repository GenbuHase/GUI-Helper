function UpdateCheck() {
	new java.lang.Thread(
		new java.lang.Runnable({
			run: function () {
				try {
					var Connecter = new java.net.URL("https://github.com/GenbuHase/GUI-Helper/tree/master/Alpha/").openConnection().connect();
					var ModContent = new java.io.BufferedReader(
						new java.io.InputStreamReader(Connecter.getInputStream())
					);

					while (ModContent.readLine() != null) {
						if (ModContent.readLine() == "") {
							
						}
					}
				} catch (Error) {
					clientMessage(Error);
				}
			}
		})
	);
}