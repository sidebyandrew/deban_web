'use client';
import {
  Code,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

import { useEffect, useState } from 'react';

export default function Page() {
  const timezoneOffset = -new Date().getTimezoneOffset() / 60;
  console.info('timezoneOffset', timezoneOffset);
  const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.info(timeZone);

  let [timeZoneClient, setTimeZoneClient] = useState('');

  useEffect(() => {
    setTimeZoneClient(new Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  return (
    <div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Key</TableColumn>
          <TableColumn>Explain</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>GMT</TableCell>
            <TableCell>
              英国格林尼治时间为一天的中点，中国标准时间比英国格林尼治时间快8小时，也就是GMT+8
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>UTC</TableCell>
            <TableCell>
              协调世界时，是由原子钟提供的。在计算机的世界里，时间也是跟UTC对齐的。中国的标准时间是UTC+8。GMT则可以认为是UTC+0。
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>getTimezoneOffset</TableCell>
            <TableCell>
              <Code color="secondary">
                const timezoneOffset = -new Date().getTimezoneOffset() / 60;
                timezoneOffset = {timezoneOffset}
              </Code>
              <Code color="secondary">getTimezoneOffset(): number;</Code>
              <p>
                {' '}
                Gets the difference in minutes between the time on the local
                computer and Universal Coordinated Time (UTC).
              </p>
              <p>
                获取本地计算机上的时间与通用协调时间之间的分钟差。注意是用UTC减去本地时间，如果是正时区，则返回值为负数。
              </p>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>timezone</TableCell>
            <TableCell>
              {' '}
              {timeZone} timeZoneClient:{timeZoneClient}
            </TableCell>
          </TableRow>

          <TableRow key="5">
            <TableCell>2个CST</TableCell>
            <TableCell>
              <p>1、China Standard Time ： UTC+8</p>
              <p>2、Central Standard Time： UTC-6</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
