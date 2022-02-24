var shell = WScript.CreateObject("WScript.Shell");

shell.Run("bin\\mysqld.exe", 0);
shell.Run("bin\\mysql.exe -u root -p");
WScript.Sleep(100);
shell.AppActivate("mysql.exe");
shell.SendKeys("root0902~");