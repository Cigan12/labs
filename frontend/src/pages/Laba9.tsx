import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export interface ILaba9Props {}

export const Laba9: React.FC<ILaba9Props> = () => {
    const [params, setparams] = useState<Array<string>>([]);

    const [token, setToken] = useState("");

    const [files, setFiles] = useState<FileList | null>();

    const [filesResp, setFilesResp] = useState<any>([]);

    const [multiDataFile, setmultiDataFile] = useState<FileList | null>();

    const [multiData, setMultiData] = useState({
        token: "",
        files: [],
        params: [],
    });

    const getParams = async () => {
        try {
            const r = await API.get("laba9/params", {
                params: ["param1", "param2", "param3"],
            });
            setparams(r.data);
        } catch (error) {
            console.log("Cigan-log: getParams -> error", error);
        }
    };

    const getToken = async () => {
        try {
            const r = await API.get("laba9/token", {
                headers: {
                    token: "test-token",
                },
            });
            setToken(r.data);
        } catch (error) {
            console.log("Cigan-log: getToken -> error", error);
        }
    };

    const sendData = async () => {
        try {
            const fd = new FormData();
            if (files)
                for (let index = 0; index < files.length; index++) {
                    fd.append("files", files[index] as any);
                }

            const r = await API.post("laba9/data", fd);
            setFilesResp(r.data);
        } catch (error) {
            console.log("Cigan-log: sendData -> error", error);
        }
    };

    const sendMultiData = async () => {
        try {
            const fd = new FormData();
            if (multiDataFile)
                for (let index = 0; index < multiDataFile.length; index++) {
                    fd.append("files", multiDataFile[index] as any);
                }
            const r = await API.post("laba9/multidata", fd, {
                headers: {
                    token: "test token",
                },
                params: ["paramtest", "test2"],
            });

            setMultiData(r.data);
        } catch (error) {
            console.log("Cigan-log: sendMultiData -> error", error);
        }
    };

    return (
        <div>
            <Link to="/">home</Link>
            <h4>laba 9</h4>
            <button onClick={() => getParams()}>
                Send request with params
            </button>
            <h5>params: </h5>
            <ol>
                {!params ||
                    params.map((item, index) => <li key={index}>{item}</li>)}
            </ol>
            <h5>get token from headers</h5>
            <button onClick={() => getToken()}>get token</button>

            <p>{token}</p>

            <input
                type="file"
                multiple
                onChange={(e) => setFiles(e.target.files)}
            />
            <button onClick={() => sendData()}>send data</button>

            {!filesResp ||
                filesResp.map((item: any, index: number) => (
                    <li key={index}>
                        <p>Name: {item.name}</p>
                        <p>Type: {item.type}</p>
                        <p>Size: {item.size}</p>
                    </li>
                ))}

            <input
                type="file"
                multiple
                onChange={(e) => setmultiDataFile(e.target.files)}
            />

            <button onClick={() => sendMultiData()}>Multi data request</button>

            <div>
                <h5>token {multiData.token}</h5>
                <h5>Params: </h5>
                <ol>
                    {!multiData.params ||
                        multiData.params.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ol>
                <h5>files links: </h5>
                <ol>
                    {!multiData.files ||
                        multiData.files.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                </ol>
            </div>
        </div>
    );
};
