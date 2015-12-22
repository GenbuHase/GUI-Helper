function UpdateCheck() {
	new java.lang.Thread(
		new java.lang.Runnable({
			run: function () {
				try {
					var Flag = {
						Before: false,
						After: false
					}

					var Connecter = {
						Before: null,
						After: new java.net.URL("https://raw.githubusercontent.com/GenbuHase/GUI-Helper/master/Alpha/After.js").openConnection()
					}

					var Reader = {
						Before: null,
						After: new java.io.BufferedReader(new java.io.InputStreamReader(Connecter.After.getInputStream()))
					}

					var Content = {
						Before: "",
						After: "",
						
						MemoryBefore: "",
						MemoryAfter: ""
					}

					Connecter.After.connect();

					while (!Flag.After) {
						Content.MemoryAfter = Reader.After.readLine();

						if (Content.MemoryAfter != null) {
							Content.After += Content.MemoryAfter + "\n";
						} else {
							Flag.After = true;
						}
					}

					clientMessage(Content.After.toString());
				} catch (Error) {
					clientMessage(Error);
				}
			}
		})
	).start();
}

function Update() {
	
}

function newLevel() {
	UpdateCheck();
}