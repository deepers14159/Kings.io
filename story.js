function updateStoryEvents()
{
if(answers.openQ == 0)
{
	if(answers.openA == -1)
	{
		createBox("Welcome to: KINGS", "black");
		createBox("By Deeps.", "black");
		createAnswerBox("Play", 0, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 1;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 1)
{
	if(answers.openA == -1)
	{
		createBox("Hail future king!", "black");
		createBox("This is the story panel. Information will appear here and you can click the buttons like the one below to make decisions.", "black");
		createAnswerBox("Continue", 1, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 2;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 2)
{
	if(answers.openA == -1)
	{
		createBox("At the top left is your inventory. Items gathered will appear there.", "black");
		createBox("At the bottom left are your stats. Your stats will influence story outcomes.", "black");
		createAnswerBox("Continue", 2, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 3;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 3)
{
	if(answers.openA == -1)
	{
		createBox("Future king... your rise to power is a very epic tale. How exactly did you win the throne?", "black");
		createAnswerBox("I stabbed the old king in his sleep.", 3, 1);
		createAnswerBox("I challenged the old king to a duel.", 3, 2);
		createAnswerBox("I inherited the kingdom from my father.", 3, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		updateStat(2, 15);
		updateStat(1, -5);
		updateStat(3, -10);
		answers.openQ = 4;
	}
	if(answers.openA == 2)
	{
		updateStat(3, 15);
		updateStat(0, -10);
		answers.openQ = 5;
	}
	if(answers.openA == 3)
	{
		updateStat(0, 15);
		answers.openQ = 6;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 4)
{
	if(answers.openA == -1)
	{
		createBox("Ahh yes. Nothing like sneaking into the castle at night, stabbing the king, framing the prince for the crime, and then taking the crown for yourself. What a savage.", "black");
		createAnswerBox("Continue", 4, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 7;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 5)
{
	if(answers.openA == -1)
	{
		createBox("Of course. You knew the king was getting old. It was only a matter of time until he fell.", "black");
		createAnswerBox("Continue", 5, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 7;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 6)
{
	if(answers.openA == -1)
	{
		createBox("What a privileged child.", "black");
		createAnswerBox("Continue", 6, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 7;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 7)
{
	if(answers.openA == -1)
	{
		createBox("After you get your hands on the crown, what will you rename your kingdom?", "black");
		createAnswerBox("Aurora", 7, 1);
		createAnswerBox("Devonshire", 7, 2);
		createAnswerBox("Gondor", 7, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		storyVars.kingdomName = "Aurora";
		answers.openQ = 9;
	}
	if(answers.openA == 2)
	{
		storyVars.kingdomName = "Devonshire";
		answers.openQ = 9;
	}
	if(answers.openA == 3)
	{
		storyVars.kingdomName = "Gondor";
		updateStat(0, -15);
		answers.openQ = 8;
	}
	if(answers.openA != 0)
	{
		createInventBox("Crown of " + storyVars.kingdomName + "", "crown", 1);
		answers.openA = -1;
	}
}
if(answers.openQ == 8)
{
	if(answers.openA == -1)
	{
		createBox("Turns out nobody likes that name.", "black");
		createAnswerBox("Continue", 8, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 9;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 9)
{
	if(answers.openA == -1)
	{
		createBox("Interesting choice.", "black");
		createBox("Now, nobody ever becomes king simply to 'serve the people.' There is no such thing as a completely fair a just ruler. What exactly do you desire as king?", "black");
		createAnswerBox("Become rich.", 9, 1);
		createAnswerBox("Become famous.", 9, 2);
		createAnswerBox("Conquer the world.", 9, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 10;
	}
	if(answers.openA == 2)
	{
		answers.openQ = 10;
	}
	if(answers.openA == 3)
	{
		answers.openQ = 10;
	}
	if(answers.openA != 0)
	{
		updateStat(3, -5);
		answers.openA = -1;
	}
}
if(answers.openQ == 10)
{
	if(answers.openA == -1)
	{
		createBox("*sigh* You will soon learn, King of " + storyVars.kingdomName + ", that being king is not that easy; not everyone wants you to remain in power. Remember that if your popularity is low, your subjects will overthrow you. If your sanity is low, you may start having suicidal thoughts. If you run out of resources, other kingdoms will easily conquer you.", "black");
		createBox("...just remember to keep an eye on your stats while pursuing your greedy goals.", "black");
		createAnswerBox("Next Chapter", 10, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		clearChat();
		answers.openQ = 11;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 11)
{
	if(answers.openA == -1)
	{
		createBox("Chapter I: FIT TO BE A KING", "black");
		createAnswerBox("Continue", 11, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 12;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 12)
{
	if(answers.openA == -1)
	{
		createBox("Your Highness, there seems to be a big problem. There are some people who think that you are not fit to be king.", "black");
		createBox("These rebels have united under the leadership of a fearless fighter. What was their name again?", "black");
		createAnswerBox("Madame Uglyface", 12, 1);
		createAnswerBox("Sir Yellowbeard", 12, 2);
		createAnswerBox("Sir Bighat", 12, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		storyVars.opponentName = "Madame Uglyface";
		answers.openQ = 13;
	}
	if(answers.openA == 2)
	{
		storyVars.opponentName = "Sir Yellowbeard";
		answers.openQ = 13;
	}
	if(answers.openA == 3)
	{
		storyVars.opponentName = "Sir Bighat";
		answers.openQ = 13;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 13)
{
	if(answers.openA == -1)
	{
		createBox("Oh that's right I remember now. Well it seems that " + storyVars.opponentName + " has challenged you to a duel. Do you accept the challenge?", "black");
		createAnswerBox("Yes, it is only honorable to do so", 13, 1);
		createAnswerBox("There is no need, I have the support of the people", 13, 2);
		createAnswerBox("But what if I lose?", 13, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		updateStat(3, 10);
		answers.openQ = 15;
	}
	if(answers.openA == 2 && (statsValue[0] > 50))
	{
		answers.openQ = 15;
	}
	else if(answers.openA == 2 && !(statsValue[0] > 50))
	{
		mouse = false;
		window.alert("You can't do that. Your popularity is too low.");
		answers.openA = 0;
	}
	if(answers.openA == 3)
	{
		updateStat(3, -10);
		answers.openQ = 14;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 14)
{
	if(answers.openA == -1)
	{
		createBox("You must accept the duel. It will be your death if you do not.", "black");
		createAnswerBox("Continue", 14, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 15;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 15)
{
	if(answers.openA == -1)
	{
		createBox("The time has come for you to prepare for the duel; you must secure your victory and your title to kingship. What will you do?", "black");
		createAnswerBox("Hire someone to 'hinder' " + storyVars.opponentName + ".", 15, 1);
		createAnswerBox("Spread rumors about " + storyVars.opponentName + ".", 15, 2);
		createAnswerBox("Practice my combat skills.", 15, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		updateStat(4, -2000);
		updateStat(3, -10);
		answers.openQ = 16;
	}
	if(answers.openA == 2)
	{
		updateStat(0, 10);
		updateStat(3, -10);
		answers.openQ = 17;
	}
	if(answers.openA == 3)
	{
		updateStat(1, 5);
		updateStat(2, 5);
		updateStat(3, 5);
		answers.openQ = 18;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 16)
{
	if(answers.openA == -1)
	{
		createBox("It seems that " + storyVars.opponentName + " canceled the duel because they broke their leg in an 'accident'.", "black");
		createAnswerBox("Continue", 16, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 22;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 17)
{
	if(answers.openA == -1)
	{
		createBox("It seems that " + storyVars.opponentName + " canceled the duel because they lost almost all their public support.", "black");
		createAnswerBox("Continue", 17, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 22;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 18)
{
	if(answers.openA == -1)
	{
		createBox("Your training was a success! I believe you will be ready for the duel", "black");
		createAnswerBox("Continue", 18, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 19;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 19)
{
	if(answers.openA == -1)
	{
		createBox("Today is the day of the duel. You stand in front of " + storyVars.opponentName + ", and the fight is about to begin. Will you make the first move?", "black");
		createAnswerBox("Make the first move.", 19, 1);
		createAnswerBox("Wait and let your opponent make the first move.", 19, 2);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 20;
	}
	if(answers.openA == 2)
	{
		answers.openQ = 21;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 20)
{
	if(answers.openA == -1)
	{
		createBox("You rush at " + storyVars.opponentName + " but don't notice the banana peel on the ground. You trip, fall, and are easily defeated. YOU LOSE.", "black");
		createAnswerBox("Start Over", 20, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		location.reload();
		answers.openQ = 22;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 21)
{
	if(answers.openA == -1)
	{
		createBox("You wait patiently. " + storyVars.opponentName + " rushes at you but doesn't notice the banana peel on the ground. They trip, falls, and you easily defeat them.", "black");
		createAnswerBox("Continue", 21, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 22;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 22)
{
	if(answers.openA == -1)
	{
		createBox("Congratulations you dealt with the problem.", "black");
		createAnswerBox("Next Chapter", 22, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		clearChat();
		answers.openQ = 23;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 23)
{
	if(answers.openA == -1)
	{
		createBox("Chapter II: Some time passes.", "black");
		createAnswerBox("Continue", 23, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 24;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 24)
{
	if(answers.openA == -1)
	{
		createBox("Now king, you make be popular amongst the people, but do they really support you? I have a couple of suggestions that could help.", "black");
		createAnswerBox("Build a statue of yourself in the middle of the kingdom.", 24, 1);
		createAnswerBox("I have heard that some people hold secret meetings as part of a resistance group in support of  " + storyVars.opponentName + " and his followers. You could publicly humiliate them.", 24, 2);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 25;
	}
	if(answers.openA == 2)
	{
		answers.openQ = 27;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 25)
{
	if(answers.openA == -1)
	{
		createBox("Sounds good. What should it be made of?", "black");
		createAnswerBox("Wood", 25, 1);
		createAnswerBox("Marble", 25, 2);
		createAnswerBox("Gold", 25, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1 && (statsValue[4] >= 3000))
	{
		updateStat(0, 5);
		updateStat(4, -3000);
		answers.openQ = 26;
	}
	else if(answers.openA == 1 && !(statsValue[4] >= 3000))
	{
		mouse = false;
		window.alert("You can't do that. You do not have enough money.");
		answers.openA = 0;
	}
	if(answers.openA == 2 && (statsValue[4] >= 5000))
	{
		updateStat(0, 15);
		updateStat(4, -5000);
		answers.openQ = 26;
	}
	else if(answers.openA == 2 && !(statsValue[4] >= 5000))
	{
		mouse = false;
		window.alert("You can't do that. You do not have enough money.");
		answers.openA = 0;
	}
	if(answers.openA == 3 && (statsValue[4] >= 10000))
	{
		updateStat(0, 25);
		updateStat(4, -10000);
		answers.openQ = 26;
	}
	else if(answers.openA == 3 && !(statsValue[4] >= 10000))
	{
		mouse = false;
		window.alert("You can't do that. You do not have enough money.");
		answers.openA = 0;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 26)
{
	if(answers.openA == -1)
	{
		createBox("I hope nobody steals it...", "black");
		createAnswerBox("Continue", 26, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 29;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 27)
{
	if(answers.openA == -1)
	{
		createBox("Sounds good. I think you should publish something in the newspaper. What will you say?", "black");
		createAnswerBox("Insult their faces.", 27, 1);
		createAnswerBox("Insult their moms.", 27, 2);
		createAnswerBox("Insult their education.", 27, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		updateStat(0, 5);
		answers.openQ = 28;
	}
	if(answers.openA == 2)
	{
		updateStat(0, 10);
		answers.openQ = 28;
	}
	if(answers.openA == 3)
	{
		updateStat(0, -5);
		answers.openQ = 28;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 28)
{
	if(answers.openA == -1)
	{
		createBox("Sure.", "black");
		createAnswerBox("Continue", 28, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 29;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 29)
{
	if(answers.openA == -1)
	{
		createBox("On to the next chapter!", "black");
		createAnswerBox("Next Chapter", 29, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		clearChat();
		answers.openQ = 30;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 30)
{
	if(answers.openA == -1)
	{
		createBox("Chapter III: The end as you know it.", "black");
		createAnswerBox("Continue", 30, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 31;
	}
	if(answers.openA != 0)
	{
		updateStat(5, -20000);
		answers.openA = -1;
	}
}
if(answers.openQ == 31)
{
	if(answers.openA == -1)
	{
		createBox("Well it turns out that " + storyVars.opponentName + " is leading a rebellion against you! A huge mob has formed and they are heading this way, and even some of the soldiers in your army have joined them. What are you going to do?", "black");
		createAnswerBox("Send the rest of the army after them.", 31, 1);
		createAnswerBox("Try to talk with them", 31, 2);
		createAnswerBox("No options left...", 31, 3);
		answers.openA = 0;
	}
	if(answers.openA == 1 && (statsValue[0] > 60))
	{
		updateStat(5, -20000);
		answers.openQ = 34;
	}
	else if(answers.openA == 1 && !(statsValue[0] > 60))
	{
		mouse = false;
		window.alert("You can't do that. You do not have the support of the people, so the army will not follow your orders.");
		answers.openA = 0;
	}
	if(answers.openA == 2)
	{
		answers.openQ = 32;
	}
	if(answers.openA == 3)
	{
		answers.openQ = 33;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 32)
{
	if(answers.openA == -1)
	{
		createBox("What will you do?", "black");
		createAnswerBox("Give a speech", 32, 1);
		createAnswerBox("There is nothing left to do... YOU LOSE. Start Over?", 32, 2);
		answers.openA = 0;
	}
	if(answers.openA == 1 && (statsValue[0] > 90))
	{
		updateStat(0, -40);
		answers.openQ = 34;
	}
	else if(answers.openA == 1 && !(statsValue[0] > 90))
	{
		mouse = false;
		window.alert("You can't do that. You do not have the support of the people.");
		answers.openA = 0;
	}
	if(answers.openA == 2)
	{
		location.reload();
		answers.openQ = 34;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 33)
{
	if(answers.openA == -1)
	{
		createBox("Within a few minutes the mob arrives at the palace and you are killed. YOU LOSE", "black");
		createAnswerBox("Start Over", 33, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		location.reload();
		answers.openQ = 34;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
if(answers.openQ == 34)
{
	if(answers.openA == -1)
	{
		createBox("Well thankfully that worked and you stopped the mob from taking your life.", "black");
		createBox("Sadly " + storyVars.opponentName + " has led his followers to secede from the kingdom, and they have formed a new nation to the south.", "black");
		createBox("For now, however, you can rest.", "black");
		createAnswerBox("TO BE CONTINUED", 34, 1);
		answers.openA = 0;
	}
	if(answers.openA == 1)
	{
		answers.openQ = 35;
	}
	if(answers.openA != 0)
	{
		answers.openA = -1;
	}
}
}
