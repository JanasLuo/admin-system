import React, { FC, ReactNode } from 'react'
import styles from './index.styl'
export interface TypeHzCustomTableRow {
  name?: string;
  children?: TypeHzCustomTableRow[];
  id?: number;
  [index: string]: any;
}

export interface TypeHzCustomTableColumns {
  dataIndex: string | number;
  key?: string | number;
  title: string;
  render?(row: TypeHzCustomTableRow, col: TypeHzCustomTableColumns): ReactNode | string;
  [index: string]: any;
}

interface HzCustomTableProps {
  dataSource: TypeHzCustomTableRow[];
  columns: TypeHzCustomTableColumns[];
  showIndex?: boolean | undefined;
  rowHeight?: number | string
}

const HzCustomTable: FC<HzCustomTableProps> = (props) => {

  const { columns, dataSource, rowHeight } = props;

  const { custom_table, thead, tbody, table_row, table_col, operate_btns } = styles;
  return (
    <div className={custom_table}>
      <div className={thead}>
        <div className={table_row}>
          {
            columns.map((col, idx) => {
              return <div key={idx} style={{ width: col.width }}>{col.title}</div>
            })
          }
        </div>
      </div>
      <div className={tbody}>
        {
          dataSource.map((row, rowIdx) => {
            return <div key={rowIdx} className={table_row} style={{height: (rowHeight && rowHeight + 'px')}}>
              {
                columns.map((col, colIdx) => {
                  return <div key={colIdx} className={table_col} style={{ width: col.width }}>
                    {
                      col.dataIndex === 'index' ? rowIdx + 1 : col.dataIndex === 'operation' ? <div className={operate_btns}>{col.render && col.render(row, col)}</div> : col.render ? col.render(row, col) : row[col.dataIndex]
                    }
                  </div>
                })
              }
            </div>
          })
        }
      </div>
    </div>
  )
}

export default HzCustomTable;
