if (commandfile === 'pearl'.toLowerCase()) {
		try{
			LeOn.command.get('pearl').run(message, args);

		}
		catch(error) {console.log('Error: ' + error);}

	}
	else if (commandfile === 'greet'.toLowerCase()) {
		try{
			LeOn.command.get('greet').run(message, args);

		}
		catch(error) {console.log('Error: ' + error);}

	}
	else if(commandfile === 'meme') {
		try{
			LeOn.command.get('meme').execute(message, args);

		}
		catch(error) {console.log('Error:' + error);}

	}
	else if(commandfile === 'urban' || commandfile === 'u' || commandfile === 'dict') {
		try{
			LeOn.command.get('urban' || 'u' || 'dict').run(message, args);

		}
		catch(error) {console.log('Error: ' + error);}

	}
	else{console.log('User did not return proper <command>');}